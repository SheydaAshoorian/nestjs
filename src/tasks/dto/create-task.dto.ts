import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ 
    example: 'طراحی دیتابیس', 
    description: 'عنوان تسک' 
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3) // حداقل ۳ کاراکتر
  title: string;

  @ApiProperty({ 
    example: 'بررسی روابط بین جداول یوزر و تسک', 
    required: false 
  })
  @IsString()
  description?: string;
}