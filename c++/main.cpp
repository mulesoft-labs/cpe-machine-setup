#include <iostream>

int main()
{
    if ("Not ready to code!" != "I am ready to code!") {
        std::cout << "Error: you are not yet ready to code.  Please fix the conditional.";
    }
    else {
        std::cout << "Success!  You are ready to code on-site.";
    }
}
