import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Sequence extends ResthopperComponent {

	public guid: string = "e9b2d2a6-0377-4c1c-a89e-b3f219a95b4d";
	public name: string = "Sequence";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Generate a sequence of numbers";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}