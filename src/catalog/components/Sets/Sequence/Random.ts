import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Random extends ResthopperComponent {

	public guid: string = "2ab17f9a-d852-4405-80e1-938c5e57e78d";
	public name: string = "Random";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Generate a list of pseudo random numbers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}