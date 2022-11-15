import React from "react";

interface PictureProps {
	name: string;
	alt: string;
	className?: string;
	id?: string;
	width: string;
}

export default function Picture({
	name,
	alt,
	className = "",
	id = "",
	width,
}: PictureProps) {
	return (
		<picture id={id}>
			{/* <source src={"/" + size + "/" + name + ".webp"} /> */}
			<img
				width="100%"
				height="517"
				className={className}
				srcSet={` ../images/${name}_200.png 200w,
          ../images/${name}_850.png 770w,
          ../images/${name}_1150.png 1137w,
          ../images/${name}_1400.png 1400w`}
				src={`../images/${name}_1400.png`}
				alt={alt}
			/>
		</picture>
	);
}
