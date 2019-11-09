import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SurfaceFrames extends ResthopperComponent {

	public guid: string = "332378f4-acb2-43fe-8593-ed22bfeb2721";
	public name: string = "Surface Frames";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Generate a grid of {uv} frames on a surface";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}