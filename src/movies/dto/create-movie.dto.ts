import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  // each 옵션 : 검증하는 값이 배열일 때 내부의 모든 값을 하나씩 검증 하는지 여부
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
