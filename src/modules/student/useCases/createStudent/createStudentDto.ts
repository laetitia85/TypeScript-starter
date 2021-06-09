import { MinLength, IsString, IsDefined } from 'class-validator'
// import { parseError } from '../../../../utils/parseError'
import { AbstractDto } from '../../../../common/abstractDto'

export interface IRequestCreateUserDto {
    first_name?: string;
    last_name?: string;

}

export class RequestCreateUserDto extends AbstractDto implements IRequestCreateUserDto {
  
    @IsDefined({ message: 'First_name is required' })
    @MinLength(2, {
        message: 'First_name is too short',
      })
    @IsString()
    public first_name?: string

    @IsDefined({ message: 'Last_name is required' })
    @MinLength(2, {
        message: 'Last_name is too short',
      })
    @IsString()
    public last_name?: string

  

    constructor(props: IRequestCreateUserDto) {
        super();
        const { first_name, last_name } = props;
        this.first_name = first_name;
        this.last_name = last_name;
    }
}