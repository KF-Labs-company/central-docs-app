import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldTitle,
} from '@/app/components/ui/field'
import { Switch } from '@/app/components/ui/switch'

type SwitchCustomProps = {
    title: string
    description: string
    id: string
}

export function SwitchCustom({ title, description, id }: SwitchCustomProps) {
    return (
        <FieldGroup className="w-full">
            <FieldLabel htmlFor={id}>
                <Field orientation="horizontal">
                    <FieldContent>
                        <FieldTitle>{title}</FieldTitle>
                        <FieldDescription>{description}</FieldDescription>
                    </FieldContent>
                    <Switch id={id} />
                </Field>
            </FieldLabel>
        </FieldGroup>
    )
}
