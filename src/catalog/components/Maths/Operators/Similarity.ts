import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Similarity extends ResthopperComponent {

	public guid: string = "40177d8a-a35c-4622-bca7-d150031fe427";
	public name: string = "Similarity";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Test for similarity of two numbers";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}