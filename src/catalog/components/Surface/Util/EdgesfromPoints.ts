import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgesfromPoints extends ResthopperComponent {

	public guid: string = "73269f6a-9645-4638-8d5e-88064dd289bd";
	public name: string = "Edges from Points";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select brep edges based on point coincidence";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}