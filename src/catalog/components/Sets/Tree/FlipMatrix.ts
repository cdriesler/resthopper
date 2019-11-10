import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlipMatrix extends ResthopperComponent {

	public guid: string = "41aa4112-9c9b-42f4-847e-503b9d90e4c7";
	public name: string = "Flip Matrix";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Flip a matrix-like data tree by swapping rows and columns.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}