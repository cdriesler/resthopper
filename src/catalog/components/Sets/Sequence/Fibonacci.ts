import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Fibonacci extends ResthopperComponent {

	public guid: string = "fe99f302-3d0d-4389-8494-bd53f7935a02";
	public name: string = "Fibonacci";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Creates a Fibonacci sequence.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}