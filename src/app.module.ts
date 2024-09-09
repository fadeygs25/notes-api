import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [NotesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
