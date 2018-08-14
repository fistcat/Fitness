import { Exercise } from './exercise.model';
import { Subject } from '../../../node_modules/rxjs';

export class TrainingService {
  exerciseChange = new Subject<Exercise>();
  private availableExecrise: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];

  private runningExecrise: Exercise;

  getAvailableExecrise() {
    return this.availableExecrise.slice();
  }

  startExercise(selectedId: string) {
    this.runningExecrise = this.availableExecrise.find(
      ex => ex.id === selectedId
    );
    console.log(this.runningExecrise);
    this.exerciseChange.next({ ...this.runningExecrise });
  }
}
