package main

import (
	"fmt"
	"testing"
)

func TestSetup(t *testing.T) {
	if false {
		fmt.Println("I am ready to code!")
	} else {
		t.Error("Not ready to code!")
	}
}

func main() {}
