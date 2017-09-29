// Name of the project
name := "cpe-machine-setup"

// Project version
version := "0.0.1"

// Version of Scala used by the project
scalaVersion := "2.11.8"
libraryDependencies += "io.spray" %%  "spray-json" % "1.3.3"
libraryDependencies += "org.scalatest" % "scalatest_2.11" % "3.0.1" % "test"
libraryDependencies += "org.scalacheck" %% "scalacheck" % "1.13.4" % "test"
libraryDependencies += "junit" % "junit" % "4.12" % "test"

scalacOptions ++= Seq("-unchecked", "-deprecation", "-Xcheckinit", "-encoding", "utf8", "-feature")
