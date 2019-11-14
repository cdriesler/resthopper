import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Fibonacci extends ResthopperComponent {

	public guid: string = "fe99f302-3d0d-4389-8494-bd53f7935a02";
	public name: string = "Fibonacci";
	public nickName: string = "Fib";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Creates a Fibonacci sequence.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"seeda_a": FibonacciInput_seeda_a,
		"seedb_b": FibonacciInput_seedb_b,
		"number_n": FibonacciInput_number_n,
	}

	public output:
	{
		"series_s": FibonacciOutput_series_s,
	}

	constructor() {
		super();
		this.input = {
			"seeda_a": new FibonacciInput_seeda_a(),
			"seedb_b": new FibonacciInput_seedb_b(),
			"number_n": new FibonacciInput_number_n(),
		}
		this.output = {
			"series_s": new FibonacciOutput_series_s(),
		}
	}

}

class FibonacciInput_seeda_a extends ResthopperParameter {

	public name: string = "SeedA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FibonacciInput_seedb_b extends ResthopperParameter {

	public name: string = "SeedB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FibonacciInput_number_n extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FibonacciOutput_series_s extends ResthopperParameter {

	public name: string = "Series";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
