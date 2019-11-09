import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Triangular extends ResthopperComponent {

	public guid: string = "86a9944b-dea5-4126-9433-9e95ff07927a";
	public name: string = "Triangular";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "2D grid with triangular cells";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}