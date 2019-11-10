import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Orient extends ResthopperComponent {

	public guid: string = "378d0690-9da0-4dd1-ab16-1d15246e7c22";
	public name: string = "Orient";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Orient an object. Orientation is sometimes called a 'ChangeBasis tranformation'. It allows for remapping of geometry from one axis-system to another.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}