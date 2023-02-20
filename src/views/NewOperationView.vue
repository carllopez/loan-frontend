<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="operationSelect" class="form-label">Operation</label>
      <select class="form-select" v-model="userOperation" name="operation" id="operationSelect">
        <option value="1">Addition</option>
        <option value="2">Subtract</option>
        <option value="3">Multiplication</option>
        <option value="4">Division</option>
        <option value="5">Square Root</option>
        <option value="6">Random String</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="operandA" class="form-label">Operand A</label>
      <input type="text" v-model="operand_a" class="form-control" id="operandA">
    </div>
    <div class="mb-3">
      <label for="operandB" class="form-label">Operand B</label>
      <input type="text" v-model="operand_b" class="form-control" id="operandB">
    </div>
    <button type="submit" class="btn btn-primary">Calculate</button>
  </form>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      operand_a: 0,
      operand_b: 0,
      userOperation: 1,
      response: ''
    }
  },
  computed: {
    ...mapState('operation', ['operation', 'response'])
  },
  created () {
    // keeping it for now, may not be needed
  },
  methods: {
    ...mapActions('operation', ['addition', 'subtract', 'multiplication', 'division', 'square_root', 'random_string']),
    handleSubmit (e) {
      const { operand_a, operand_b, userOperation } = this;
      if (operand_a && operand_b) {
        switch (userOperation) {
          case '1':
            this.addition({ operand_a, operand_b });
            break;
          case '2':
            this.subtract({ operand_a, operand_b });
            break;
          case '3':
            this.multiplication({ operand_a, operand_b });
            break;
          case '4':
            this.division({ operand_a, operand_b });
            break;
          case '5':
            this.square_root({ operand_a });
            break;
          default:
            this.random_string({ operand_a });
            break;
        }
      }
    }
  }
};
</script>