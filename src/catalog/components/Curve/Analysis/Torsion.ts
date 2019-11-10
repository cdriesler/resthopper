import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Torsion extends ResthopperComponent {

	public guid: string = "dbe9fce4-b6b3-465f-9615-34833c4763bd";
	public name: string = "Torsion";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the torsion of a curve at a specified parameter.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}