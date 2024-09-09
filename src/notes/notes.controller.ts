// src/notes/notes.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './entities/note.entity';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Note> {
    return this.notesService.findOne(+id);
  }

  @Post()
  create(@Body() note: Partial<Note>): Promise<Note> {
    return this.notesService.create(note);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() note: Partial<Note>): Promise<Note> {
    return this.notesService.update(+id, note);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.notesService.remove(+id);
  }
}
