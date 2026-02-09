import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({ example: 'DONE', description: 'وضعیت تسک', required: false })
  status?: string;
}