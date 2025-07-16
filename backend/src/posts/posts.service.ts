import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.sevice';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any, authorId: number) {
    return this.prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        authorId,
      },
    });
  }

  findAll() {
    return this.prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      include: { author: { select: { name: true, email: true } } },
    });
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  update(id: number, data: any) {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
