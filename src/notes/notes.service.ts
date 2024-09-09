// src/notes/notes.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  findAll(): Promise<Note[]> {
    return this.notesRepository.find();
  }

  findOne(id: number): Promise<Note> {
    return this.notesRepository.findOne({ where: { id } });
  }

  create(note: Partial<Note>): Promise<Note> {
    const newNote = this.notesRepository.create(note);
    return this.notesRepository.save(newNote);
  }

  async update(id: number, note: Partial<Note>): Promise<Note> {
    await this.notesRepository.update(id, note);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.notesRepository.delete(id);
  }
}
