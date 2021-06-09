import { MinLength, IsString, IsDefined, IsEmail } from 'class-validator'
// import { parseError } from '../../../../utils/parseError'
import { AbstractDto } from '../../../../common/abstractDto'

export interface IRequestCreateUserDto {
    email: string;
    password: string;
}

export class RequestCreateUserDto extends AbstractDto implements IRequestCreateUserDto {
    @IsEmail()
    @IsDefined({ message: 'Email is required' })
    public email: string

    //-------------FIELD-------------
    @IsDefined({ message: 'Password is required' })
    @MinLength(8, {
            message: 'The password must contain at least $constraint1 characters, but actual is $value'
        })
    @IsString()
    public password: string

    constructor(props: IRequestCreateUserDto) {
        super();

        const { email, password } = props;
        this.email = email;
        this.password = password;
    }
}