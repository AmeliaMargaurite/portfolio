import { HeadFC } from "gatsby";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Layout } from "../../../components/Layout";

import {
	BufferGeometry,
	Color,
	Line,
	LineBasicMaterial,
	PerspectiveCamera,
	Scene,
	Vector3,
	WebGLRenderer,
} from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { throttleFunction } from "../../../helpers/throttleFunction";

const images = {
	"low-poly-drifter": {
		credits:
			'Low-poly truck (car "Drifter")" (https://skfb.ly/6QUOx) by Ivan Norman is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/)',
		filename: "low-poly_truck_car_drifter.glb",
	},
	"fiesta-tea": {
		credits:
			'"Fiesta tea" (https://skfb.ly/ouNvE) by Omar Faruq Tawsif is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).',
		filename: "fiesta_tea.glb",
	},
};

const threeJS = () => {
	const [width, setWidth] = useState<null | number>(null);
	const [height, setHeight] = useState<null | number>(null);
	const [camera, setCamera] = useState<any>(null);

	const ref = { width, height, camera };
	const _ref = useRef(ref);
	_ref.current = ref;

	const renderer = new WebGLRenderer({ antialias: true });
	const material = new LineBasicMaterial({ color: "#c71919" });
	const scene = new Scene();
	scene.background = new Color("#ffffff");

	const points = [];
	points.push(new Vector3(-10, 0, 0));
	points.push(new Vector3(0, 10, 0));
	points.push(new Vector3(10, 0, 0));

	const geometry = new BufferGeometry().setFromPoints(points);

	const canvasRef = useRef<HTMLElement | null>(null);
	// const line = new Line(geometry, material);
	// scene.add(line);

	const loader = new GLTFLoader();

	const moveCamera = useCallback(
		throttleFunction((e: MouseEvent) => {
			const { camera } = _ref.current;
			const x = e.clientX / 1000;
			const y = e.clientY / 1000;
			console.log(x, y);
			camera.position.set(x, y, 10);
			console.log(camera);
			renderer.render(scene, camera);
		}),
		[]
	);

	// const resetSizes = () => {
	// 	console.log("resize");
	// 	if (canvasRef && canvasRef.current) {
	// 		setHeight(window.innerHeight);
	// 		setWidth(window.outerWidth - 32);
	// 	}
	// };

	useEffect(() => {
		if (width && height) {
			renderer.setSize(width, height);

			document.body.appendChild(renderer.domElement);

			const tempCamera = new PerspectiveCamera(45, width / height, 1, 500);
			tempCamera.position.set(1, 3, 10);
			tempCamera.lookAt(0, 0, 0);
			setCamera(tempCamera);
			loader.load(
				"/threeImages/" + images["fiesta-tea"].filename,
				function (gltf) {
					const image = gltf.scene.children[0];
					scene.add(image);
					renderer.render(scene, tempCamera);
					window.addEventListener("mousemove", moveCamera);
				},
				undefined,
				function (error) {
					console.error(error);
				}
			);
		}
	}, [width, height]);

	useEffect(() => {
		if (canvasRef && canvasRef.current) {
			setHeight(window.innerHeight);
			setWidth(window.outerWidth - 32);
		}
		// window.addEventListener("resize", resetSizes);
		// return window.removeEventListener("resize", resetSizes);
	}, []);

	return (
		<Layout className="garden__page threejs">
			<section>
				<h3>Documenting the Journey</h3>
				<p>
					As this site is currently (13th December 2022) built with Gatsby
					(React) I am researching and experimenting the best way to use it
					here. I'm first trying through <code>npm install three</code>, then I
					had to <code>npm i --save-dev @types/three</code> to help out
					Typescript.
				</p>
				<p>
					To start with I'm following{" "}
					<a
						href="https://threejs.org/docs/index.html#manual/en/introduction/Drawing-lines"
						target="_blank"
						className="link"
					>
						this mini tutorial from threeJS
					</a>
					, except that I've set the HTML Section element below this with a
					useRef ref and I'm using this to set the width and height of the
					canvas threeJS creates.
				</p>
				<p>
					<strong>First little hiccup...</strong>
					<br />
					According to{" "}
					<a
						href="https://threejs.org/docs/index.html#manual/en/introduction/Loading-3D-models"
						target="_blank"
						className="link"
					>
						their docs
					</a>{" "}
					you're suppose to import this loader as such
					<br />
					<code>
						{"import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';"}
					</code>
					<br />
					However for me this was throwing an error, stating it couldn't find
					the file. After a quick google I found{" "}
					<a
						href="https://discourse.threejs.org/t/gltfloader-cannot-be-found/42254/2"
						target="_blank"
						className="link"
					>
						this response
					</a>{" "}
					where one of the contributors to threejs{" "}
					<a
						href="https://discourse.threejs.org/u/donmccurdy"
						target="_blank"
						className="link"
					>
						donmccurdy
					</a>{" "}
					mentions that the 'three/addons' alias is still new and might have
					some issues. Instead he suggests using an older import method
					<br />
					<code>
						{
							"import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';"
						}
					</code>
					. And voila! It works. Well at least the import, I haven't actually
					used it yet.
				</p>
				<p>
					<strong>With a little more help...</strong>
					<br />
					After arriving at a black mass on my page and no pretty picture, I
					once again consulted google. This time{" "}
					<a
						href="https://discourse.threejs.org/t/black-screen-with-three-js-tutorial/18672/2"
						target="_blank"
						className="link"
					>
						this gem
					</a>
					put me back on track and I realised that I'd been calling the render
					function inside the useEffect before the image was even loaded... d'oh
				</p>
			</section>

			<article ref={canvasRef}></article>
		</Layout>
	);
};

export default threeJS;
export const Head: HeadFC = () => <title>ThreeJS</title>;
