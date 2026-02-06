import cron from 'node-cron';
import Task from '../models/task.model';

cron.schedule('0 * * * *', async () => {
  const dueTasks = await Task.find({
    dueDate: { $lte: new Date() },
    completed: false
  });

  console.log('Tasks due:', dueTasks.length);
});
