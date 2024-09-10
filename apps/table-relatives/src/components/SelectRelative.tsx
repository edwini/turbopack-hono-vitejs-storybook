import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@repo/ui/select";
interface SelectRelativeProps {
    parentezcos: Parentezco[]
}
type Parentezco = {
    id: number,
    description: string
}
const SelectRelative = ({ parentezcos }: SelectRelativeProps) => {

    return (
        <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Parentezco" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Parentezco</SelectLabel>
                    {parentezcos.map(({ id, description }) =>
                    <SelectItem key={id} value={id.toString()}>{description}</SelectItem>
                )}
            </SelectGroup>
        </SelectContent>
        </Select>
    );
}

export default SelectRelative;