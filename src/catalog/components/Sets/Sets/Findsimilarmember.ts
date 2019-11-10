import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Findsimilarmember extends ResthopperComponent {

	public guid: string = "b4d4235f-14ff-4d4e-a29a-b358dcd2baf4";
	public name: string = "Find similar member";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Find the most similar member in a set.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}