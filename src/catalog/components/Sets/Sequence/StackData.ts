import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class StackData extends ResthopperComponent {

	public guid: string = "5fa4e736-0d82-4af0-97fb-30a79f4cbf41";
	public name: string = "Stack Data";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Duplicate individual items in a list of data";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}