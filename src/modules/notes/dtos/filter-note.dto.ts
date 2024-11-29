import { IsOptional, IsString } from 'class-validator';

export class FilterNoteDto {
  @IsOptional()
  @IsString()
  title?: string;
}
