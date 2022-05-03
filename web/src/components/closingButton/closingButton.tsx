import { Popover } from "@headlessui/react"
import { X } from "phosphor-react"

export function ClosingButton(){
    return(
        <Popover.Button className="top-5 right-5 absolute text-text-secondary hover:text-text-primary" title="Fechar formulário de feedback">
            <X weight="bold" className="w-4 h-4"/>
        </Popover.Button>
    )
}