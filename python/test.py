import unittest

class TestCase(unittest.TestCase):
    """Test Case for machine setup"""

    def setUp(self):
        pass

    def test_ready_to_code(self):
        """Fix me and you are ready to code"""
        self.assertEqual("Not ready to code!", "I am ready to code!")

if __name__ == '__main__':
    unittest.main()
