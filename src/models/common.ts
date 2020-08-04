export class Common implements Deserializable {    
    emails: string[] = ["email"];
    mobiles: string[] = ["mobile"];
    services: Service[];
    links: Link[];
    portfolioHeading: string;
    openingTimes: OpeningTime[];
    portfolios: Portfolio[];
    address:string;
    address1: string;
    emailApi: string;
    functionKey: string;
    recaptchaSiteKey: string;
    deserialize(input: any): this {
        Object.assign(this, input);        
        return this;
    }
}
export class Link implements Deserializable {    
    name: string;
    isMenu: boolean;
    isUsefulLink: boolean;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
export class Service implements Deserializable {    
    name: string;
    iconPath: string;
    description: string;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
export class Portfolio implements Deserializable {    
    name: string;
    imagePath: string;
    description: string;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
export class OpeningTime implements Deserializable {    
    day: string;
    timing: string;    
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
export interface Deserializable {
    deserialize(input: any): this;
}

export class EmailObj {     
      public name = "";
      public fromEmail = "";
      public mobile: number;
      public subject = "";
      public description = "";  
      public toEmail = "";
      public captcha = "";
}