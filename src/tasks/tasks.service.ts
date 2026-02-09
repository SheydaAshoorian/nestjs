import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService { 
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const newTask = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(newTask);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) throw new NotFoundException('پیدا نشد');
    Object.assign(task, updateTaskDto);
    return await this.taskRepository.save(task);
  }

  async remove(id: number) {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException('پیدا نشد');
  }
}