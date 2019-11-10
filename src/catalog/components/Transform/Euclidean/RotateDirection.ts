import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RotateDirection extends ResthopperComponent {

	public guid: string = "5edaea74-32cb-4586-bd72-66694eb73160";
	public name: string = "Rotate Direction";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Rotate an object from one direction to another.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}