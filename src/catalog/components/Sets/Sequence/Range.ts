import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Range extends ResthopperComponent {

	public guid: string = "9445ca40-cc73-4861-a455-146308676855";
	public name: string = "Range";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Create a range of numbers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}