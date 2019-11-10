import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Series extends ResthopperComponent {

	public guid: string = "e64c5fb1-845c-4ab1-8911-5f338516ba67";
	public name: string = "Series";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Create a series of numbers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}