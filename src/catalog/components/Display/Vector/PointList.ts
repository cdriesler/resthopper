import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointList extends ResthopperComponent {

	public guid: string = "cc14daa5-911a-4fcc-8b3b-1149bf7f2eeb";
	public name: string = "Point List";
	public category: string = "Display";
	public subCategory: string = "Vector";
	public description: string = "Displays details about lists of points";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}