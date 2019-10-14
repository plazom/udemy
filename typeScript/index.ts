class User {
    private isTeacher: boolean;
    protected age: number = 30;

    constructor(public name: string, public job: string) {
    }

    private getAge(): number {
        return this.age;
    }

    public setTitle(title: boolean) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
        console.log(this.getAge());
    }

}

const user = new User('WFM', 'Frontend');
user.setTitle(false);
