import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RandomReduce extends ResthopperComponent {

	public guid: string = "455925fd-23ff-4e57-a0e7-913a4165e659";
	public name: string = "Random Reduce";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Randomly remove N items from a list";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}