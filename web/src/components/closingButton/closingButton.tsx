import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function ClosingButton() {
	return (
		<Popover.Button
			className="top-5 right-5 absolute text-text-secondary-100 hover:text-text-primary-100 dark:text-text-secondary-500 dark:hover:text-text-primary-500"
			title="Fechar formulário de feedback"
		>
			<X weight="bold" className="w-4 h-4" />
		</Popover.Button>
	);
}
