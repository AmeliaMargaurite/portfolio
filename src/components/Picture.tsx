import React from "react";

interface PictureProps {
	name: string;
	alt: string;
	className?: string;
	id?: string;
}

export default function Picture({
	name,
	alt,
	className = "",
	id = "",
}: PictureProps) {
	return (
		<picture id={id}>
			{/* <source src={"/" + size + "/" + name + ".webp"} /> */}
			<img
				className={className}
				srcSet="
          ../images/Group-1_1_ci7b7s_c_scale,w_200.png 200w,
          ../images/Group-1_1_ci7b7s_c_scale,w_770.png 770w,
          ../images/Group-1_1_ci7b7s_c_scale,w_1137.png 1137w,
          ../images/Group-1_1_ci7b7s_c_scale,w_1400.png 1400w"
				src="../images/Group-1_1_ci7b7s_c_scale,w_1400.png"
				alt={alt}
			/>
		</picture>
	);
}
