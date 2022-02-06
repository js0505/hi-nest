import { MoviesService } from './movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    console.log(this.movieService.getAll());
    return this.movieService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Movie {
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.movieService.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.movieService.update(id, updateData);
  }
}
