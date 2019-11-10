import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ImageGallery extends ResthopperComponent {

	public guid: string = "54ab3f01-a769-4742-a7bf-cec48a1acb6f";
	public name: string = "ImageGallery";
	public category: string = "Display";
	public subCategory: string = "Graphs";
	public description: string = "Display a sequence of images";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{

	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {

		}
		this.output = {

		}
	}

}
