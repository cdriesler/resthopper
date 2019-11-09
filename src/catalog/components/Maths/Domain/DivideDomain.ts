import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DivideDomain extends ResthopperComponent {

	public guid: string = "75ac008b-1bc2-4edd-b967-667d628b9d24";
	public name: string = "Divide Domain²";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Divides a two-dimensional domain into equal segments.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}