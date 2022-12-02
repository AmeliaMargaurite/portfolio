export const throttleFunction = (callBack: (e?: any) => any, delay = 1000) => {
	let wait = false;
	let waitingArgs: undefined | any;

	const timeoutFunction = () => {
		if (waitingArgs == null) {
			wait = false;
		} else {
			callBack(...waitingArgs);
			waitingArgs = null;
			setTimeout(timeoutFunction, delay);
		}
	};

	console.log(wait);

	return (...args: any[]) => {
		if (wait) {
			waitingArgs = args;
			return;
		}

		callBack(...args);
		wait = true;
		console.log({ wait, args, waitingArgs });
		setTimeout(timeoutFunction, delay);
	};
};