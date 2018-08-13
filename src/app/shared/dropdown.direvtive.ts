import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirevtive{
    @HostBinding('class.open') isOpen = false;
    
    @HostListener('click') toggleButton()  {
        this.isOpen = !this.isOpen;
    }
}