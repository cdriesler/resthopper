import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PathCompare extends ResthopperComponent {

	public guid: string = "1d8b0e2c-e772-4fa9-b7f7-b158251b34b8";
	public name: string = "Path Compare";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Compare a path to a mask pattern";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}