import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';

@Module({
  imports: [
    // تنظیمات اتصال به دیتابیس داکر
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // مطابق با فایل docker-compose
      password: 'password123', // مطابق با فایل docker-compose
      database: 'postgres', // مطابق با فایل docker-compose
      entities: [Task],     // معرفی جدول‌ها به دیتابیس
      synchronize: true,    // در محیط توسعه: جداول را خودکار می‌سازد
    }),
    TasksModule, // اضافه کردن ماژول تسک‌ها
  ],
  controllers: [], // اگر از AppController استفاده نمی‌کنی، می‌توانی خالی بگذاری
  providers: [],   // اگر از AppService استفاده نمی‌کنی، می‌توانی خالی بگذاری
})
export class AppModule {}