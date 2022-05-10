import { Moon, IconProps } from "phosphor-react";
import { useState } from "react";

interface DarkModeProps extends IconProps {
	toggleDarkMode: () => void;
}

export function DarkMode({ toggleDarkMode, weight }: DarkModeProps) {
	return (
		<button
			className={
				"absolute top-4 right-4 md:bottom-8 md:right-8 flex flex-col justify-center align-middle bg-brand-500 rounded-full px-3 h-12 text-white hover:bg-brand-300 transition-all"
			}
			type="button"
			onClick={toggleDarkMode}
		>
			<Moon className="w-6 h-6" weight={weight} />
		</button>
	);
}
