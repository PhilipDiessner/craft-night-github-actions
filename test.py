import unittest
import os


class TestMethods(unittest.TestCase):

    def test_secret(self):
        self.assertEqual(os.environ["SECRET"], "420")


if __name__ == '__main__':
    unittest.main()
