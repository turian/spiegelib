#!/usr/bin/env python
"""
Simple Multi-layer Perceptron Deep Learning Model

Based on model proposed by Yee-King et al.

"Automatic programming of VST sound synthesizers using deep networks and other techniques."
Yee-King, Matthew John, Leon Fedden, and Mark d'Inverno.
IEEE Transactions on Emerging Topics in Computational Intelligence 2.2 (2018): 150-159.
"""

from spiegel.estimator.tf_estimator_base import TFEstimatorBase
import tensorflow as tf
from tensorflow.keras import layers

class Conv1(TFEstimatorBase):
    """
    :param inputShape: Shape of matrix that will be passed to model input
    :type inputShape: tuple
    :param numOutputs: Number of outputs the model has
    :type numOuputs: int
    :param kwargs: optional keyword arguments to pass to :class:`spiegel.estimator.TFEstimatorBase`
    """

    def __init__(self, inputShape, numOutputs, **kwargs):
        """
        Constructor
        """

        super().__init__(inputShape, numOutputs, **kwargs)


    def buildModel(self):
        """
        Construct LSTM Model

        :param hiddenSize: dimensionality of outer space of hidden layers, defaults to 100
        :type hiddenSize: int, optional
        """

        self.model = tf.keras.Sequential()
        self.model.add(layers.Conv2D(32, (3, 3), strides=2, dilation_rate=(1,1), input_shape=self.inputShape, activation='relu'))
        self.model.add(layers.Conv2D(64, (3, 3), strides=2, dilation_rate=(1,1), activation='relu'))
        self.model.add(layers.Conv2D(128, (3, 3), strides=2, dilation_rate=(1,1), activation='relu'))
        self.model.add(layers.Conv2D(256, (3, 3), strides=2, dilation_rate=(1,1), activation='relu'))
        self.model.add(layers.Conv2D(256, (2, 2), strides=2, dilation_rate=(1,1), activation='relu'))
        self.model.add(layers.Conv2D(512, (2, 2), strides=2, dilation_rate=(1,1), activation='relu'))
        self.model.add(layers.Dropout(0.25))
        self.model.add(layers.Flatten())
        self.model.add(layers.Dense(self.numOutputs))

        self.model.compile(
            optimizer=tf.optimizers.Adam(),
            loss=TFEstimatorBase.rootMeanSquaredError,
            metrics=['accuracy']
        )
